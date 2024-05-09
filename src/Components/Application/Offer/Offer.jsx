import { useState, useEffect } from "react";
import OfferTable from "../Offer/OfferTable";
import { getCall } from "../../../Api/axios";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const columns = [
    { id: "offerId", label: "Offer Id", minWidth: 120, align: "center" },
    {
        id: "type",
        label: "Type",
        format: (value) => value.toLocaleString("en-US"),
        minWidth: 140,
        align: "center",
    },
    {
        id: "autoApply",
        label: "Auto Apply",
        minWidth: 130,
        align: "center",
    },
    {
        id: "validFrom",
        label: "Valid From",
        minWidth: 130,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "validTo",
        label: "Valid To",
        minWidth: 130,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      },
    {
        id: "createdAt",
        label: "Created On",
        minWidth: 180,
        format: (value) => value.toLocaleString("en-US"),
        align: "center",
    },

];

export default function Offers() {
    const theme = useTheme();
    const [offers, setOffers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [columnList, setColumnList] = useState(columns);
    const navigate = useNavigate();


    const getOffers = () => {
        const url = `/api/v1/offers?limit=${rowsPerPage}&offset=${page}`;
        getCall(url)
            .then((resp) => {
                setOffers(resp.data);
                setTotalRecords(resp.count);
            })
            .catch((error) => {
                console.log(error.response);
            })
    };

    useEffect(() => {
        getOffers();
    }, [page, rowsPerPage]);


    return (
        <>
            <div className="container mx-auto my-8">
                <div className="mb-4 flex flex-row justify-between items-center">
                    <label style={{ color: theme.palette.primary.main }} className="font-semibold text-2xl">Offers</label>
                    <Button
                        sx={{ marginRight: 1 }}
                        variant="contained"
                        onClick={() => navigate("/application/add/offer")}
                    >
                        Add Offer
                    </Button>
                </div>
                <OfferTable
                    columns={columnList}
                    data={offers}
                    dataUpdate={getOffers}
                    totalRecords={totalRecords}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    handlePageChange={(val) => setPage(val)}
                    handleRowsPerPageChange={(val) => setRowsPerPage(val)}
                />
            </div>
        </>
    );
}
