import React from "react";
// import {BulletChart} from "@gooddata/sdk-ui-charts";
// import { newTotal } from "@gooddata/sdk-model";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Ldm, LdmExt } from "../ldm";
// import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
// import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
// import { workspace } from "../constants";
// const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

const style = { height: 500 };
export const InsightViewExamples = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Ldm.Insights.SalesOverTime} />
        </div>
    );
};
