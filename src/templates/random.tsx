/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import { ExternalImage } from "../types/ExternalImage";

/**
* Not required depending on your use case.
*/
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "random-template",
};

/**
* A local type for transformProps. This could live in src/types but it's generally
* best practice to keep unshared types local to their usage.
*/
type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

/**
* Defines the path that the generated file will live at for production.
*
* NOTE: This currently has no impact on the local dev path. Local dev urls currently
* take on the form: featureName/entityId
*/
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};


/**
* This is the main template. It can have any name as long as it's the default export.
* The props passed in here are the direct result from `getStaticProps`.
*/
const Random: Template<ExternalImageRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  externalImage,
}) => {
  const { _site } = document;

  return (
    <>
      <PageLayout _site={_site}>
        <div className="centered-container">
          <div className="bg-red-900 text-5xl font-bold text-white p-10 flex items-center justify-center flex-col gap-x-14 gap-y-10 md:flex-row">
            <h1>Welcome to Random template</h1>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Random;
