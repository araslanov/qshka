package com.qshka.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class ChampionController {
    @GetMapping
    List<String> getChampionNames() {
        return Collections.singletonList("Aatrox");
    }
}
