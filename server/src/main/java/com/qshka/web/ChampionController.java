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
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class ChampionController {
    @Value("${API_KEY}")
    private String apiKey;

    @GetMapping("/champions")
    List<String> getChampionNamesStub() {
        return Arrays.asList("Leona", "Varus", "Nautilus", "Viktor", "Sejuani", "Fiora", "Lucian", "Ziggs", "Lulu",
                "Malzahar", "Zed", "Talon", "Draven", "Riven", "Ornn", "Kog'Maw", "Kayle", "Shen", "Lux", "Master Yi",
                "Alistar", "Ryze", "Sion", "Sivir", "Soraka", "Teemo", "Tristana", "Warwick", "Kled", "Hecarim",
                "Kha'Zix", "Annie", "Darius", "Olaf", "Ekko", "Galio", "Twisted Fate", "Jayce", "Xin Zhao",
                "Lissandra", "Urgot", "LeBlanc", "Vladimir", "Fiddlesticks", "Nunu", "Miss Fortune", "Ashe",
                "Tryndamere", "Jax", "Morgana", "Zilean", "Singed", "Evelynn", "Twitch", "Diana", "Quinn", "Vi",
                "Rakan", "Syndra", "Xayah", "Aurelion Sol", "Thresh", "Karthus", "Cho'Gath", "Amumu", "Rammus",
                "Anivia", "Shaco", "Dr. Mundo", "Sona", "Kassadin", "Irelia", "Kayn", "Zyra", "Aatrox", "Illaoi",
                "Nami", "Rek'Sai", "Azir", "Ivern", "Kalista", "Janna", "Gangplank", "Corki", "Karma", "Taric",
                "Veigar", "Trundle", "Gnar", "Zac", "Bard", "Yasuo", "Swain", "Caitlyn", "Blitzcrank", "Malphite",
                "Katarina", "Nocturne", "Maokai", "Renekton", "Jarvan IV", "Vel'Koz", "Taliyah", "Camille", "Braum",
                "Jhin", "Kindred", "Elise", "Orianna", "Wukong", "Brand", "Lee Sin", "Vayne", "Rumble", "Cassiopeia",
                "Skarner", "Heimerdinger", "Nasus", "Nidalee", "Udyr", "Poppy", "Gragas", "Jinx", "Xerath", "Shyvana",
                "Tahm Kench", "Ahri", "Graves", "Fizz", "Volibear", "Pantheon", "Rengar", "Ezreal", "Mordekaiser",
                "Yorick", "Akali", "Kennen", "Garen");
    }

    @GetMapping("/champions1")
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
