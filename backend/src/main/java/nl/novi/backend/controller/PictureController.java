package nl.novi.backend.controller;

import nl.novi.backend.domain.Picture;
import nl.novi.backend.payload.response.PictureResponse;
import nl.novi.backend.repository.PictureRepository;
import nl.novi.backend.service.PictureService;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

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

    @DeleteMapping("/api/picture/delete/{id}")
    public String deletePicture(@PathVariable Long id) {
        pictureService.deletePicture(id);
        return "Picture deleted.";
    }
}
