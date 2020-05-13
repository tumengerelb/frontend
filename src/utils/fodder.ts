import { isNullOrUndefined } from 'util';

function parsedata(req: fodderlist) {
  if (isNullOrUndefined(req)) {
    console.log(req);
  }
  return 'okk';
}
export interface fodderlist {
  id: string;
}
async function fodder() {
  try {
    // Create request to api service
    const req = await fetch(`opendata.1212.mn/api/data`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      // format the data
      body: JSON.stringify({
        tbl_id: ['DT_NSO_1001_038V2'],
      }),
    });

    const res = await req.json();
    parsedata(res);
    // Log success message
    console.log(res);
  } catch (err) {
    console.error(`ERROR:`, { err });
  }
}
export default fodder;
