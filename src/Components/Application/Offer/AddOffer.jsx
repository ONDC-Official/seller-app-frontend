import { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import moment from "moment";
import MyButton from "../../Shared/Button";
import { useNavigate, useParams } from "react-router-dom";
import { getCall, postCall, putCall } from "../../../Api/axios";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OfferInfo from "./OfferInfo";
import OfferBenefit from "./OfferBenefit";
import OfferQualifier from "./OfferQualifier";
import BackNavigationButton from "../../Shared/BackNavigationButton";

const AddOffer = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [isEdit, setIsEdit] = useState(false);
    const [tabErrors, setTabErrors] = useState([true, true, true]);
    const [offerType, setOfferType] = useState('discount');

    const [offerInfoForm, setOfferInfoForm] = useState({});
    const [offerInfoFormErrors, setOfferInfoFormErrors] = useState({});

    const [offerQualifierForm, setOfferQualifierForm] = useState({});
    const [offerQualifierFormErrors, setOfferQualifierFormErrors] = useState({});

    const [offerBenefitForm, setOfferBenefitForm] = useState({});
    const [offerBenefitFormErrors, setOfferBenefitFormErrors] = useState({});
    const [tabValue, setTabValue] = useState("1");

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        let offerId = params?.id;
        if (offerId && !isEdit) {
            getOfferDetails(offerId);
        }
    }, [params.id]);

    const getOfferDetails = async (id) => {
        try {
            const url = `/api/v1/offers/${id}`;
            const res = await getCall(url);
            setOfferType(res?.type)
            console.log(res)
            // Extract offer data from the response
            const {
                type,
                offerId,
                description,
                autoApply,
                additive,
                valid,
                items,
                images,
                qualifiers,
                benefits
            } = res;

            // Update offer info form fields
            setOfferInfoForm({
                type,
                offerId,
                description,
                autoApply,
                additive,
                validFrom: moment(valid.from).format("YYYY-MM-DD"),
                validTo: moment(valid.to).format("YYYY-MM-DD"),
                items,
                images
            });

            // Update offer qualifier form fields
            setOfferQualifierForm({
                minValue: qualifiers.minValue,
                itemCount: qualifiers.itemCount
                // Add other qualifier fields as needed
            });

            // Update offer benefit form fields
            setOfferBenefitForm({
                valueType: benefits.valueType,
                value: benefits.value,
                valueCap: benefits.valueCap,
                itemCount: benefits.itemCount,
                item: benefits.item,
                itemValue: benefits.itemValue
                // Add other benefit fields as needed
            });
            setIsEdit(true)
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async () => {
        // Gather data from all three components
        const offerInfoData = offerInfoForm;
        const offerQualifierData = offerQualifierForm;
        const offerBenefitData = offerBenefitForm;
        const validFromTimestamp = new Date(offerInfoData.validFrom).getTime();
        const validToTimestamp = new Date(offerInfoData.validTo).getTime();
        // Combine data from all components
        const formData = {
            type: offerType,
            offerId: offerInfoData.offerId,
            description: offerInfoData.description,
            validFrom: validFromTimestamp,
            validTo: validToTimestamp,
            autoApply: offerInfoData.autoApply,
            additive: offerInfoData.additive,
            images: offerInfoData.images,
            items: offerInfoData.items,
            qualifiers: offerQualifierData,
            benefits: offerBenefitData
        };
        try {
            // Make API call to submit form data
            let response = ''
            if (params?.id) {
                response = await putCall(`/api/v1/offers/${params?.id}`, formData);
                cogoToast.success("Offer Updated Succesfully");
            } else {
                response = await postCall('/api/v1/offers', formData);
                cogoToast.success("Offer Added Succesfully");

            }
            navigate('/application/offers');
        } catch (error) {
            cogoToast.error(error.response.data.error);
        }
    };

    const renderOfferInfo = () => {
        return (
            <OfferInfo
                formData={offerInfoForm}
                onFormUpdate={setOfferInfoForm}
                offerInfoFormErrors={offerInfoFormErrors}
                setOfferType={setOfferType}
                offerType={offerType}
                isEdit={isEdit}
            />
        );
    };

    const renderOfferQualifier = () => {
        return (
            <OfferQualifier
                formData={offerQualifierForm}
                onFormUpdate={setOfferQualifierForm}
                offerQualifierFormErrors={offerQualifierFormErrors}
                offerType={offerType}
            />
        );
    };

    const renderOfferBenefit = () => {
        return (
            <OfferBenefit
                formData={offerBenefitForm}
                onFormUpdate={setOfferBenefitForm}
                offerBenefitFormErrors={offerBenefitFormErrors}
                offerType={offerType}
            />
        );
    };

    let highlightedTabColor = tabErrors.includes(true) ? "error" : "primary";

    return (
        <>
            <div className="container mx-auto my-8">
                <div
                    className="w-full bg-white px-4 py-4 rounded-md h-full scrollbar-hidden"
                    style={{ minHeight: "95%", maxHeight: "100%", overflow: "auto" }}
                >
                    <BackNavigationButton
                        onClick={() => navigate("/application/offers")}
                    />
                    <div className="w-full !h-full">
                        <label className="ml-2 md:mb-4 md:mt-3 mt-2 font-semibold text-xl">
                            Add Offer
                        </label>
                        <form>
                            <Box sx={{ width: "100%", typography: "body1" }}>
                                <TabContext value={tabValue}>
                                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                        <TabList
                                            onChange={handleTabChange}
                                            textColor={highlightedTabColor}
                                            centered
                                        >
                                            <Tab
                                                sx={{
                                                    color:
                                                        tabErrors[0] && Object.keys(offerInfoFormErrors).length > 0
                                                            ? "red"
                                                            : "none",
                                                }}
                                                label="Offer Info"
                                                value="1"

                                            />
                                            <Tab
                                                sx={{
                                                    color:
                                                        tabErrors[1] && Object.keys(offerQualifierFormErrors).length > 0
                                                            ? "red"
                                                            : "none",
                                                }}
                                                label="Offer Quaifier"
                                                value="2"
                                            />
                                            <Tab
                                                sx={{
                                                    color:
                                                        tabErrors[2] && Object.keys(offerBenefitFormErrors).length > 0
                                                            ? "red"
                                                            : "none",
                                                }}
                                                label="Offer Benefit"
                                                value="3"
                                            />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <div className="mt-2">{renderOfferInfo()}</div>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div className="mt-2">{renderOfferQualifier()}</div>
                                    </TabPanel>
                                    <TabPanel value="3">{renderOfferBenefit()}</TabPanel>
                                </TabContext>
                            </Box>

                            <div className="flex flex-row justify-center py-2 sm:pt-5 md:!mt-10">
                                <MyButton
                                    type="button"
                                    title={params?.id ? 'UPDATE Offer' : 'ADD Offer'}
                                    variant="contained"
                                    className="!ml-5"
                                    onClick={handleSubmit}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddOffer;
