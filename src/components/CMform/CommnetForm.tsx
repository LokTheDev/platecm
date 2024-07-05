import { Autocomplete, Box, Button, Rating, Skeleton, TextField, Typography } from "@mui/material";
import suburbList from "./suburb";
import { Dispatch, FormEvent, useContext, useState } from "react";
import { FireDB } from "../../firebase/firebase";
import { addDoc, collection, Firestore } from "firebase/firestore";
import SignInButton from "../Goolge/SingInButton";
import { userContext } from "../../store/userStore";
import { observer } from "mobx-react";

type Inputs = {
    Author: string,
    AuthorName: string,
    Content: string,
    Date: Date,
    Plate: String,
    Suburb: string,
    Rate: Number,
}

const CommentForm = (Props: { plate: string, SubmittingState: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const UserStore = useContext(userContext);

    const [suburb, setSuburb] = useState("");
    const [content, setContent] = useState("");
    const [rate, setRate] = useState(3);
    const [error, setError] = useState("")
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            Props.SubmittingState(true);
            const docRef = await addDoc(collection(FireDB, "CarCms"), {
                Author: UserStore.GetUser()?.email,
                AuthorName: UserStore.GetUser()?.displayName,
                Content: content,
                Date: new Date(),
                Plate: Props.plate,
                Suburb: suburb,
                Rate: rate,
            });
            Props.SubmittingState(false)
            setRate(3);
            setContent("")
            setSubmitted(true);
        } catch (e) {
            setError(JSON.stringify(e));
        }
    }


    return (
        <>
            {UserStore.isLoggedIn ?
                <form onSubmit={handleSubmit}>
                    {error && <h3>{error}</h3>}
                    <Box component="section" sx={{ p: 5, bgcolor: '#fff', display: 'flex', alignItems: 'center', gap: 2.5, flexWrap: 'wrap' }}>
                        <Autocomplete
                            onChange={(event, value) => setSuburb(value ? value.label : "")}
                            disablePortal
                            id="combo-box-demo"
                            options={suburbItem}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField key={1} {...params} label="Suburb" />}
                        />
                        <TextField value={content} onChange={(e) => setContent(e.target.value)} id="outlined-basic" label="Comment" variant="outlined" />
                        <Rating name="size-medium" value={rate ? rate : 0} onChange={(event, newValue) => {
                            setRate(newValue ? newValue : 0);
                        }} />
                        <Button type='submit' variant="contained" color={submitted ? "success" : "primary"}>Submit</Button>
                        {submitted &&
                            <Typography variant="subtitle1">
                                Submitted ✅
                            </Typography>
                        }
                    </Box>
                </form>
                :
                <Box component="section" sx={{ p: 2, width: '100%', bgcolor: '#fff', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <SignInButton />
                    <Typography>
                        Discover What's Happening Behind the Wheel
                    </Typography>
                </Box>
            }
        </>
    )



}

export default observer(CommentForm);


const suburbItem = suburbList.map((item, index) => {
    return {
        id: index,
        key: index + "_key",
        label: item
    }
})


