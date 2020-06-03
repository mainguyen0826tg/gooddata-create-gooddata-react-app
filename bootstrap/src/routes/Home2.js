import React, { useState } from "react";
import { Execute, LoadingComponent, ErrorComponent } from "@gooddata/sdk-ui";
import { newMeasure } from "@gooddata/sdk-model";
import { LdmExt, Ldm } from "../ldm";
export const Home2 = () => {
    const [{ willFail }, setState] = useState({
        executionNumber: 0,
        willFail: false,
    });

    const retry = () => {
        setState(({ executionNumber }) => {
            const nextExecutionNumber = executionNumber + 1;
            return {
                executionNumber: nextExecutionNumber,
                willFail: nextExecutionNumber % 2 !== 0,
            };
        });
    };

    const retryButton = (
        <p>
            <button onClick={retry} className="gd-button gd-button-action s-retry-button">
                Retry
            </button>
            &ensp;(fails every second attempt)
        </p>
    );
    const measure = newMeasure(willFail ? "thisDoesNotExits" : LdmExt.totalSalesIdentifier);
    const measureArray = [measure];
    return (
        <div>
            <Execute seriesBy={measureArray}>
                {({ error, isLoading, result }) => {
                    if (error) {
                        return (
                            <div>
                                {retryButton}
                                <div className="gd-message error">
                                    <div className="gd-message-text">Oops, simulated error! Retry?</div>
                                </div>
                                <ErrorComponent
                                    message="There was an error getting your execution"
                                    description={JSON.stringify(error, null, 2)}
                                />
                            </div>
                        );
                    }

                    if (isLoading || !result) {
                        return (
                            <div>
                                <div className="gd-message progress">
                                    <div className="gd-message-text">Loading…</div>
                                </div>
                                <LoadingComponent />
                            </div>
                        );
                    }

                    const measureSeries = result
                        .data()
                        // .slices()
                        .series()
                        .firstForMeasure(measure);
                    return (
                        <div>
                            <style jsx>
                                {`
                                    .kpi {
                                        height: 60px;
                                        margin: 10px 0;
                                        font-size: 50px;
                                        line-height: 60px;
                                        white-space: nowrap;
                                        vertical-align: bottom;
                                        font-weight: 700;
                                    }
                                `}
                            </style>
                            {retryButton}
                            <p className="kpi s-execute-kpi">
                                {measureSeries.dataPoints()[0].formattedValue()}
                            </p>
                        </div>
                    );
                }}
            </Execute>
        </div>
    );
};

export default Home2;
