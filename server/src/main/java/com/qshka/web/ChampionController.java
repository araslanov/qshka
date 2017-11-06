package com.qshka.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
public class ChampionController {
    @GetMapping("/test")
    List<String> getChampionNames() {
        return Collections.singletonList("Aatrox");
    }
}
