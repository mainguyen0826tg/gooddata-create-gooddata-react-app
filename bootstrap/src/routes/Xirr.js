import React from "react";
import { Xirr } from "@gooddata/sdk-ui-charts";
// import { newTotal } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../ldm";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
// import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { workspace } from "../constants";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
export const XirrExamples = () => {
    return <Xirr measure={Ldm.CashflowMax} attribute={Ldm.DateDate.MmDdYyyy} />;
};
