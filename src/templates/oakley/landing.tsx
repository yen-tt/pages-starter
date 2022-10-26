/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
 import * as React from "react";
 import "../../index.css";
 import {
   TemplateConfig,
 } from "@yext/pages";
 
 /**
  * Not required depending on your use case.
  */
 export const config: TemplateConfig = {
   // The name of the feature. If not set the name of this file will be used (without extension).
   // Use this when you need to override the feature name.
   name: "our-brands",
 };
 
 /**
  * Defines the path that the generated file will live at for production.
  *
  * NOTE: This currently has no impact on the local dev path. Local dev urls currently
  * take on the form: featureName/entityId
  */
 export const getPath = () => {
   return `index.html`;
 };
 
 
 /**
  * This is the main template. It can have any name as long as it's the default export.
  * The props passed in here are the direct result from `getStaticProps`.
  */
 const Static = ({}) => {
   return (
     <div>
      Oakley Brand
     </div>
   );
 };
 
 export default Static;