package com.qshka.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@CrossOrigin
@RestController
public class ChampionController {
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
