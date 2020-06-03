import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
// import  * as Ldm from "../../src/ldm/full";
import { Ldm } from "../ldm";
import Page from "../components/Page";

const Home = () => {
    return (
        <Page>
            <InsightView insight={Ldm.Insights.HeadlineChart} />
        </Page>
    );
};

export default Home;
