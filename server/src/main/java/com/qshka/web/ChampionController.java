package com.qshka.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class ChampionController {
    @Value("${API_KEY}")
    private String apiKey;

    @GetMapping("/champions")
    List<String> getChampionNames() {
        final String uri = "https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=true";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Riot-Token", apiKey);
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        ResponseEntity<AllChampions> allChampionsResponseEntity = restTemplate.exchange(uri, HttpMethod.GET, entity,
                new ParameterizedTypeReference<AllChampions>() {});

        AllChampions allChampions = allChampionsResponseEntity.getBody();
        List<String> result = allChampions.getData().values().stream().map(AllChampions.Champion::getName).collect
                (Collectors.toList());

        return result;
    }
}
