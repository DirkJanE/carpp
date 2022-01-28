package nl.novi.backend.service;

import nl.novi.backend.domain.Picture;
import nl.novi.backend.payload.response.PictureResponse;
import nl.novi.backend.repository.PictureRepository;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Service
public class PictureService {

    private PictureRepository pictureRepository;

    public PictureService(PictureRepository pictureRepository){
        this.pictureRepository = pictureRepository;
    }

    public String multipleUpload(Long userid, MultipartFile file) throws IOException {

            //String name = StringUtils.cleanPath(file.getOriginalFilename());
            Picture pictureDocument = new Picture();
            Picture pic = new Picture(file.getOriginalFilename(), pictureDocument.setUserId(userid));

            pictureRepository.save(pic);

        /*
        //java.util.List<PictureResponse> uploadResponseList = new ArrayList<>();
        Arrays.asList(files).stream().forEach(file -> {
            Long id = userid;
            String name = StringUtils.cleanPath(file.getOriginalFilename());
            Picture picture = new Picture();
            picture.setUserId(id);
            picture.setFileName(name);
            pictureRepository.save(picture);
                    try {
                        picture.setDocFile(file.getBytes());
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
            });

         */

        return "Pictures uploaded";
    }

    public Resource downLoadFileDatabase(String fileName) {


        String url = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFromDB/").path(fileName).toUriString();

        Resource resource;

        try {
            resource = new UrlResource(url);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Issue in reading the file", e);
        }

        if(resource.exists()&& resource.isReadable()) {
            return resource;
        } else {
            throw new RuntimeException("the file doesn't exist or not readable");
        }
    }

    public Collection<Picture> getALlFromDB() {
        return pictureRepository.findAll();
    }
}
