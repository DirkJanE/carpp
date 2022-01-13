import {ProfilePictureContainer} from "../style/Dropdownstyle";
import {ColumnContainer, RowContainer, StyledInput} from "../../../style/Style";
import {useState} from "react";

export const Uploadpicture = () => {
    const formData = new FormData();
    const [image, setImage] = useState();

    //get image from form
    const handleChange = (e) => {
        let image = e.target.files[0];
        formData.append('file', image);
        setImage(formData);
    }

    console.log(image);
    //backgroundImage: `url(${props.image})`
    //src={`data:image/jpg;base64,${StyledCar}`} alt=''
    return (
        <ColumnContainer>
            <ProfilePictureContainer style={{borderRadius: "10px"}}
                                     src={image}
                                    >
            </ProfilePictureContainer>
            <StyledInput onChange={handleChange}
                         style={{width: "19vw", height: "8vh", marginTop: "1vh", marginLeft: "7vw"}}
                         type="file"
                         multiple accept="image/*">

            </StyledInput>
        </ColumnContainer>

    );
}
