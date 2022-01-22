import {ProfilePictureContainer} from "../style/Dropdownstyle";
import {ColumnContainer, RowContainer, StyledInput} from "../../../style/Style";
import {useState} from "react";

export const Uploadpicture = () => {
    const [image, setImage] = useState({preview: "", raw: ""});
    const [image1, setImage1] = useState({preview: "", raw: ""});

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
            setImage1({
                preview: URL.createObjectURL(e.target.files[1]),
                raw: e.target.files[1]
            });
        }
    };

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };

        return (
            <ColumnContainer>
                <RowContainer style={{width: "70vw", justifyContent: "flex-start"}}>
                {image.preview ?
                    <ProfilePictureContainer style={{maxHeight: "35vh", maxWidth: "35vh", borderRadius: "10px"}}
                                             src={image.preview}
                                             alt="dummy"
                    />
                    :
                    <ProfilePictureContainer/>
                }
                {image1.preview ?
                    <ProfilePictureContainer style={{maxHeight: "35vh", maxWidth: "35vh", borderRadius: "10px"}}
                                             src={image1.preview}
                                             alt="dummy"
                    />
                    :
                    <ProfilePictureContainer/>
                }
                </RowContainer>
                <StyledInput onChange={handleChange}
                             style={{width: "19vw", height: "8vh", marginTop: "1vh", marginLeft: "7vw"}}
                             type="file"
                             multiple accept="image/*">

                </StyledInput>
            </ColumnContainer>

        );
    }



