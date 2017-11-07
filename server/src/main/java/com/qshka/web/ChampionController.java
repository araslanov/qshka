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

import java.util.Arrays;
import java.util.List;

@CrossOrigin
@RestController
public class ChampionController {
    @Value("${API_KEY}")
    private String apiKey;

    @GetMapping("/rito")
    AllChampions getSomething() {
        final String uri = "https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=true";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Riot-Token", apiKey);
        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);


        ResponseEntity<AllChampions> response =  restTemplate.exchange(uri, HttpMethod.GET, entity,
                new ParameterizedTypeReference<AllChampions>(){});

        System.out.println(response.getBody());
        return response.getBody();
    }

    @GetMapping("/champions")
    List<String> getChampionNames() {
        return Arrays.asList(
                "Katarina", "Malzahar", "Nidalee", "Jhin",
                "Yorick", "Karthus", "Rengar", "Akali",
                "Veigar", "Braum", "Vayne", "Galio",
                "Fiora", "Amumu", "Kha\"zix", "Jayce",
                "Zed", "Annie", "Lucian", "Ashe",
                "Lux", "Morgana", "Miss Fortune", "Graves",
                "Twitch", "Soraka", "Ryze", "Karma",
                "Alistar", "Blitzcrank", "Thresh", "Xayah",
                "Azir", "Gnar", "Aurelion Sol", "Talon",
                "Jarvan IV", "Xin Zhao", "Rek\"sai", "Ornn",
                "Quinn", "Renekton", "Shen", "Riven",
                "Tristana", "Caitlyn", "Darius", "Bard",
                "Kennen", "Illaoi", "Pantheon", "Cassiopea",
                "Orianna", "Urgot", "Vi", "Jinx",
                "Maokai", "Teemo", "Nunu", "Varus",
                "Shyvana", "Udyr", "Aatrox", "Ahri",
                "Anivia", "Brand", "Camille", "Cho\"Gath",
                "Corki", "Diana", "Dr. Mundo", "Draven",
                "Ekko", "Elise", "Evelynn", "Ezreal",
                "Fiddlesticks", "Fizz", "Gankplank", "Garen",
                "Gragas", "Hecarim", "Heimerdinger", "Irelia",
                "Warwick", "Wukong", "Zac", "Zyra",
                "Zilean", "Ziggs", "Yasuo", "Xerath",
                "Volibear", "Vladimir", "Victor", "Poppy",
                "Rakan");
    }
}
