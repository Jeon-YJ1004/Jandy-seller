import { Box } from '@mui/system'
import React, {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { API_BASE_URL } from '../../reducers/APIconfig';
import { useCookies } from 'react-cookie';

function DesignUploader() {
    const [files, setFiles] = useState([]);
    const [cookies, setCookie] = useCookies(['user_token']);
    console.log(cookies.user_token);
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("uploadfile", files.length && files[0].uploadedFile);

        axios({
        method: "post",
        url: 'http://13.124.100.213:8080/uploads',
        data: formData,
        headers: { "Content-Type": "multipart/form-data", Authorization: cookies.user_token }
        }).then((res) => console.log(res));
        setFiles([]);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFiles([...files, { uploadedFile: file }]);
    }
  return (
    <Box sx={{display : 'flex', flexDirection: 'column'}}>
        <StyledUl>파일 업로드 하기</StyledUl>
        <Form id='uploadfile'
        encType='multipart/formdata'
        onSubmit={submitHandler}>
            <Input type="file"
                    name="photo"
                    accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                    onChange={handleUpload}></Input>
            <button type='submit' form='uploadfile'>저장하기</button>
        </Form>
    </Box>
  )
}

const Form = styled.form`

`
const Input = styled.input`
`
const StyledUl = styled.ul`
    font-size: 16px;
`

export default DesignUploader