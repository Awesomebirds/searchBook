import {saveAs} from 'file-saver'

export const fileDownload = (data) => {
    const blob = new Blob(["\ufeff"+data], {type: 'text/csv;charset=utf-8;'});
    saveAs(blob, "books.csv");
}