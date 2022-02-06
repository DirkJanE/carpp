package nl.novi.backend.service;

import nl.novi.backend.domain.Picture;
import nl.novi.backend.payload.response.PictureResponse;
import nl.novi.backend.repository.PictureRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.*;

@Service
public class PictureService {

    private PictureRepository pictureRepository;

    public PictureService(PictureRepository pictureRepository){
        this.pictureRepository = pictureRepository;
    }

    public String multipleUpload(Long id, MultipartFile[] files) {

        if(files.length > 3) {
            throw new RuntimeException("to many files selected");
        }

        List<PictureResponse> uploadResponseList = new ArrayList<>();
        Arrays.asList(files).stream().forEach(file -> {

            String name = StringUtils.cleanPath(file.getOriginalFilename());
            Picture picture = new Picture();
            picture.setUserid(id);
            picture.setFileName(name);
            try {
                picture.setDocFile(file.getBytes());
            } catch (IOException e) {
                e.printStackTrace();
            }

            pictureRepository.save(picture);

//            next line makes url. example "http://localhost:8080/download/naam.jpg"
            String url = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFromDB/").path(name).toUriString();

            String contentType = file.getContentType();

            PictureResponse response = new PictureResponse(name, contentType, url);

            uploadResponseList.add(response);
        });

        return "Pictures uploaded";
    }

    public Picture downloadPicture(Long userid) {

        final Optional<Picture> getPicture = pictureRepository.findByUserid(userid);
        Picture picture = new Picture(getPicture.get().getId(), getPicture.get().getFileName(), getPicture.get().getDocFile());
        return picture;
    }

    public void deletePicture(Long id) {
        pictureRepository.deleteByUserid(id);
    }
}
