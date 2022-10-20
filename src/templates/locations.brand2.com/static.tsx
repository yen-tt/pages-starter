/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { fetch } from "@yext/pages/util";
import "../../index.css";
import {
  Template,
  GetPath,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../../components/page-layout";
import Card from "../../components/card";
import { ExternalImage } from "../../types/ExternalImage";

/**
* Not required depending on your use case.
*/
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "brand2-static",
};

/**
* A local type for transformProps. This could live in src/types but it's generally
* best practice to keep unshared types local to their usage.
*/
type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

/**
* Used to either alter or augment the props passed into the template at render time.
* This function will be run during generation and pass in directly as props to the default
* exported function.
*
* This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
* source. This example calls a public API and returns the data.
*
* If the page is truly static this function is not necessary.
*/
export const transformProps: TransformProps<ExternalImageData> = async (
  data
) => {
  const url = import.meta.env.YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL + "/2";
  const externalImage = (await fetch(url).then((res: any) =>
    res.json()
  )) as ExternalImage;
  return { ...data, externalImage };
};

/**
* Defines the path that the generated file will live at for production.
*
* NOTE: This currently has no impact on the local dev path. Local dev urls currently
* take on the form: featureName/entityId
*/
export const getPath: GetPath<ExternalImageData> = () => {
  return `static.html`;
};

type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};

/**
* This is the main template. It can have any name as long as it's the default export.
* The props passed in here are the direct result from `getStaticProps`.
*/
const Static: Template<ExternalImageRenderData> = ({
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
          <div className="bg-green-900 text-5xl font-bold text-white p-10 flex items-center justify-center flex-col gap-x-14 gap-y-10 md:flex-row">
            <h1>Welcome to Brand 2 Static!</h1>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Static;
