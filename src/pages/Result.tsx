import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, DocumentData, Timestamp } from "firebase/firestore";
import { FireDB } from "../firebase/firebase";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CommentForm from "../components/CMform/CommnetForm";
import CMHero from "../components/CMHero/CMHero";

const ResultPage = () => {

    const { id } = useParams();
    const [rawData, setRawData] = useState<DocumentData[]>([]);
    const [rate, setRate] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const convertTimestamp = (timestamp: Timestamp) => {
        let date = timestamp.toDate();
        let mm = date.getMonth();
        let dd = date.getDate();
        let yyyy = date.getFullYear();
    
        const result = mm + '/' + dd + '/' + yyyy;
        return result;
    }
    
    useEffect(() => {
        const fetchCms = async () => {
            const q = query(collection(FireDB, "CarCms"), where("Plate", "==", id));
            const querySnapshot = await getDocs(q);
            const data: DocumentData[] = [];
            let calRate = 0;
            querySnapshot.forEach((doc) => {
                const docData = doc.data();
                data.push({ id: doc.id, formattedDate: convertTimestamp(docData.Date) ,...docData});
                calRate += doc.data().Rate
            });
            setRawData(data);
            setRate(calRate / data.length);

        }
        fetchCms()
    }, [id, isSubmitting])

    return (
        <div style={{ padding: 5 }}>
            <CMHero Rate={rate} ID={id} />
            <CommentForm SubmittingState={setIsSubmitting} plate={id ? id : "Loading..."} />
            <Divider />
            <div style={{ height: '60vh', width: '100%' }}>
                <DataGrid
                    rows={rawData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 20]}
                />
            </div>
        </div>
    )
}

export default ResultPage;

const columns: GridColDef[] = [
    { field: 'AuthorName', headerName: 'Reviewer', width: 130 },
    { field: 'Suburb', headerName: 'Suburb', width: 130 },
    {
        field: 'Content',
        headerName: 'Comments',
        type: 'string',
        width: 500,
    },
    {
        field: 'formattedDate',
        headerName: 'Date',
        sortable: true,
        width: 100,
    },
    {
        field: 'Rate',
        headerName: 'Rate',
        sortable: true,
        width: 50,
        valueGetter: (value, row) => `${value} ⭐️`,
    },
];
