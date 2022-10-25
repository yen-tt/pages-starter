import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

// for testing:
// {
//   projectStructureConfig: {
//     filepathsConfig: {
//       templatesRoot: 'test',
//       scope: 'someScope'
//     }
//   }
// }

export default defineConfig({
  plugins: [react(), yextSSG()],
});
