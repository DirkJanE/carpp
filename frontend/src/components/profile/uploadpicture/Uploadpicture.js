import {ProfilePictureContainer, StyledForm} from "../style/Dropdownstyle";
import {ColumnContainer, RowContainer, StyledInput} from "../../../style/Style";
import {useEffect, useState} from "react";
import {deletePicture, uploadPicture} from "../../apirequest/Apirequest";

export const Uploadpicture = (props) => {
    const [image, setImage] = useState({preview: "", raw: ""});
        const [result, setResult] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

    useEffect(() => {
        const formData = new FormData();
        if (image.preview.length) {
            formData.append("file", image.raw);
            deletePicture(props.userid, props.token, setResult)
            if (result === 200) {
                uploadPicture(props.userid, props.token, formData)
            }
        }
    }, [image, props, result]);

        return (
            <ColumnContainer style={{alignItems: "flex-start"}}>
                <RowContainer style={{width: "70vw", justifyContent: "flex-start"}}>
                {image.preview ?
                    <ProfilePictureContainer style={{maxHeight: "35vh", width: "auto", borderRadius: "10px"}}
                                             src={image.preview}
                                             alt="dummy"
                    />
                    :
                    <ProfilePictureContainer/>
                }
                </RowContainer>
                <StyledForm method="POST" encType="multipart/form-data" action="/">
                    <StyledInput onChange={handleChange}
                                 style={{width: "19vw", height: "8vh", marginTop: "1vh", marginLeft: "6vw"}}
                                 type="file"
                                 multiple accept="image/*">

                    </StyledInput>
                </StyledForm>
            </ColumnContainer>

        );
    }



