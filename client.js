import {createClient} from "@sanity/client";
export default createClient({
  projectId: "3vbibl56", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: '2024-04-01'
});

