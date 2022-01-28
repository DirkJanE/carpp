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

@CrossOrigin
@RestController
public class PictureController {

    private PictureRepository pictureRepository;
    private PictureService pictureService;

    public PictureController(PictureRepository pictureRepository, PictureService pictureService) {
        this.pictureService = pictureService;
        this.pictureRepository = pictureRepository;
    }
/*
    @PostMapping("single/uploadDb")
    PictureResponse singleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {

        String name = StringUtils.cleanPath(file.getOriginalFilename());
        Picture pictureDocument = new Picture();
        pictureDocument.setFileName(name);
        pictureDocument.setDocFile(file.getBytes());

        pictureRepository.save(pictureDocument);

        // next line makes url. example "http://localhost:8080/download/naam.jpg"
        String url = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFromDB/").path(name).toUriString();

        String contentType = file.getContentType();

        PictureResponse response = new PictureResponse(name, contentType, url);

        return response;
    }

    //    get for single download
    @GetMapping("/downloadFromDB/{fileName}")
    ResponseEntity<byte[]> downLoadSingleFile(@PathVariable String fileName, HttpServletRequest request) {

        Picture doc = pictureRepository.findByFileName(fileName);

//        this mediaType decides witch type you accept if you only accept 1 type
//        MediaType contentType = MediaType.IMAGE_JPEG;
//        this is going to accept multiple types

        String mimeType = request.getServletContext().getMimeType(doc.getFileName());

//        for download attachment use next line
//        return ResponseEntity.ok().contentType(contentType).header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + resource.getFilename()).body(resource);
//        for showing image in browser
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(mimeType)).header(HttpHeaders.CONTENT_DISPOSITION, "inline;fileName=" + doc.getFileName()).body(doc.getDocFile());
    }
*/
    //    post for multiple uploads to database
    @PostMapping("/multiple/upload/db")
    public String multipleUpload(@RequestParam("files") Long userid, MultipartFile file) throws IOException {

        pictureService.multipleUpload(userid, file);

        return "Pictures uploaded";

    }
/*
    @GetMapping("zipDownload/db")
    public void zipDownload(@RequestParam("fileName") String[] files, HttpServletResponse response) throws IOException {

        try(ZipOutputStream zos = new ZipOutputStream(response.getOutputStream())){
            Arrays.asList(files).stream().forEach(file -> {
                Resource resource = pictureService.downLoadFileDatabase(file);
                ZipEntry zipEntry = new ZipEntry(resource.getFilename());
                try {
                    zipEntry.setSize(resource.contentLength());
                    zos.putNextEntry(zipEntry);

                    StreamUtils.copy(resource.getInputStream(), zos);

                    zos.closeEntry();
                } catch (IOException e) {
                    System.out.println("some exception while zipping");
                }
            });
            zos.finish();
        }

        response.setStatus(200);
        response.addHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=zipfile");
    }
*/
    @GetMapping("/getAll/db")
    public Collection<Picture> getAllFromDB(){
        return pictureService.getALlFromDB();
    }
}
