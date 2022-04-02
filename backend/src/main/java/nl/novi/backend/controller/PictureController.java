package nl.novi.backend.controller;

import nl.novi.backend.domain.Picture;
import nl.novi.backend.repository.PictureRepository;
import nl.novi.backend.service.PictureService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class PictureController {

    private PictureRepository pictureRepository;
    private PictureService pictureService;

    public PictureController(PictureRepository pictureRepository, PictureService pictureService) {
        this.pictureService = pictureService;
        this.pictureRepository = pictureRepository;
    }

    @PostMapping(value = "/api/picture/upload/{id}", consumes = "multipart/form-data")
    String multipleUpload(@PathVariable Long id, @RequestParam("file") MultipartFile[] files) {
        pictureService.multipleUpload(id, files);
        return "Picture uploaded";
    }

    @GetMapping("/api/picture/download/{id}")
    public Picture downloadPicture(@PathVariable Long id) {
        return pictureService.downloadPicture(id);
    }

    @DeleteMapping("/api/picture/remove/{id}")
    public String deletePicture(@PathVariable Long id) {
        pictureService.deletePicture(id);
        return "Picture deleted.";
    }
}
