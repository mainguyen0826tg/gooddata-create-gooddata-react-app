// (C) 2007-2020 GoodData Corporation
import React from "react";
import { measureLocalId } from "@gooddata/sdk-model";
import { MeasureValueFilter } from "@gooddata/sdk-ui-filters";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { LdmExt, Ldm } from "../ldm";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { workspace } from "../constants";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const measureTitle = "GrossProfit";
const measures = [Ldm.$GrossProfit];
const attributes = [LdmExt.LocationName];
const column = [LdmExt.LocationState];
export class MeasureValueFilterComponentExample extends React.PureComponent {
    state = {
        filters: [],
    };
    onApply = filter => {
        this.setState({
            filters: [filter],
        });
    };

    render() {
        const { filters } = this.state;
        return (
            <React.Fragment>
                <MeasureValueFilter
                    onApply={this.onApply}
                    filter={filters[0]}
                    buttonTitle={measureTitle}
                    measureIdentifier={measureLocalId(Ldm.$GrossProfit)}
                    displayTreatNullAsZeroOption
                    treatNullAsZeroDefaultValue
                />
                <hr className="separator" />
                <div
                    style={{
                        height: 300,
                    }}
                    className="s-pivot-table"
                >
                    <PivotTable
                        backend={backend}
                        measures={measures}
                        workspace={workspace}
                        columns={column}
                        rows={attributes}
                        filters={filters}
                    />
                </div>
            </React.Fragment>
        );
    }
}
export default MeasureValueFilterComponentExample;
