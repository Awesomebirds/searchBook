import Papa from "papaparse"

export const createCsv = (data) => {
    const csv = Papa.unparse(data);
    return csv;
}