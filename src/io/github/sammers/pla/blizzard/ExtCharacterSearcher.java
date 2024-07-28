package io.github.sammers.pla.blizzard;

import io.github.sammers.pla.http.JsonConvertable;
import io.reactivex.Single;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.reactivex.ext.web.client.WebClient;

import java.util.List;

public class ExtCharacterSearcher {


    private final WebClient webClient;

    public ExtCharacterSearcher(WebClient webClient) {
        this.webClient = webClient;
    }

    //    curl 'https://check-pvp.fr/api/characters/search?s=Minpog&region=eu' \
//        -H 'accept: application/json, text/plain, */*' \
//        -H 'accept-language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,be;q=0.6' \
//        -H 'authorization: Bearer null' \
//        -H 'content-type: application/json' \
//        -H 'cookie: language=en; defaultRegion=eu; reducePatreon=true' \
//        -H 'delay: -319' \
//        -H 'dnt: 1' \
//        -H 'function: U2FsdGVkX1+Rl92103/E7/dkzHxy7sLOxAbJs5Y0bWMfxdE0y5vh64+erBHdvSfykmNDMIYzvercAJa/4z8dW9u8qLh0R1qcso9WJCqim4U=' \
//        -H 'priority: u=1, i' \
//        -H 'referer: https://check-pvp.fr/' \
//        -H 'sec-ch-ua: "Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"' \
//        -H 'sec-ch-ua-mobile: ?0' \
//        -H 'sec-ch-ua-platform: "Windows"' \
//        -H 'sec-fetch-dest: empty' \
//        -H 'sec-fetch-mode: cors' \
//        -H 'sec-fetch-site: same-origin' \
//    curl 'https://check-pvp.fr/api/characters/search?s=Minpog&region=eu'   -H 'accept: application/json, text/plain, */*'   -H 'accept-language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,be;q=0.6'   -H 'authorization: Bearer null'   -H 'content-type: application/json'   -H 'cookie: language=en; defaultRegion=eu; reducePatreon=true'   -H 'delay: -319'   -H 'dnt: 1'   -H 'function: U2FsdGVkX1+Rl92103/E7/dkzHxy7sLOxAbJs5Y0bWMfxdE0y5vh64+erBHdvSfykmNDMIYzvercAJa/4z8dW9u8qLh0R1qcso9WJCqim4U='   -H 'priority: u=1, i'   -H 'referer: https://check-pvp.fr/'   -H 'sec-ch-ua: "Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"'   -H 'sec-ch-ua-mobile: ?0'   -H 'sec-ch-ua-platform: "Windows"'   -H 'sec-fetch-dest: empty'   -H 'sec-fetch-mode: cors'   -H 'sec-fetch-site: same-origin'   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
//    fetch("https://check-pvp.fr/api/characters/search?s=Sammers&region=eu", {
//        "headers": {
//            "accept": "application/json, text/plain, */*",
//                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,be;q=0.6",
//                "authorization": "Bearer null",
//                "content-type": "application/json",
//                "delay": "-320",
//                "function": "U2FsdGVkX18CMjQEe0VRFkbsNFt+hvyDhQwFvxyNjN3GNo4yazbmfcuE0Wbmv+iW89CZixqujVTuyRM46DJwh2oakfFvZIgcWycSp/XGO9s=",
//                "priority": "u=1, i",
//                "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
//                "sec-ch-ua-mobile": "?0",
//                "sec-ch-ua-platform": "\"Windows\"",
//                "sec-fetch-dest": "empty",
//                "sec-fetch-mode": "cors",
//                "sec-fetch-site": "same-origin"
//        },
//              "referrer": "https://check-pvp.fr/",
//            "referrerPolicy": "strict-origin-when-cross-origin",
//            "body": null,
//            "method": "GET",
//            "mode": "cors",
//            "credentials": "include"
//    });
    //    [{"name":"Minpog","realm":"Aegwynn","region":"eu","class":null},{"name":"Minpog","realm":"Aerie Peak","region":"eu","class":null},{"name":"Minpog","realm":"Agamaggan","region":"eu","class":null},{"name":"Minpog","realm":"Aegwynn","region":"us","class":null},{"name":"Minpog","realm":"Aerie Peak","region":"us","class":null},{"name":"Minpog","realm":"Alexstrasza","region":"kr","class":null},{"name":"Minpog","realm":"Azshara","region":"kr","class":null},{"name":"Minpog","realm":"Arthas","region":"tw","class":null},{"name":"Minpog","realm":"Arygos","region":"tw","class":null}]
    public Single<List<CheckPvPSearchResult>> searchChars(String query) {
        return webClient.getAbs("https://check-pvp.fr/api/characters/search")
            .addQueryParam("s", query)
            .addQueryParam("region", "eu")
            .putHeader("accept", "application/json, text/plain, */*")
            .putHeader("accept-language", "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,be;q=0.6")
            .putHeader("authorization", "Bearer null")
            .putHeader("content-type", "application/json")
            .putHeader("delay", "-320")
            .putHeader("function", "U2FsdGVkX189BJAAw+cWbtGA3nGSmDd2NYQ4QreYqVh7aeOqrJJZFMxqg9y/FQX2kDym02VmprcIn5OW18nMa1EaM0Gv+rduUUYMI8TYarQ=")
            .putHeader("priority", "u=1, i")
            .putHeader("sec-ch-ua", "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"")
            .putHeader("sec-ch-ua-mobile", "?0")
            .putHeader("sec-ch-ua-platform", "\"Windows\"")
            .putHeader("sec-fetch-dest", "empty")
            .putHeader("sec-fetch-mode", "cors")
            .putHeader("sec-fetch-site", "same-origin")
            .putHeader("referer", "https://check-pvp.fr/")
            .rxSend()
            .flatMap(response -> {
                if (response.statusCode() != 200) {
                    return Single.error(new IllegalStateException("Failed to search chars: " + response.bodyAsString()));
                }
                JsonArray resp = response.bodyAsJsonArray();
                return Single.just(resp.stream()
                    .map(j -> (io.vertx.core.json.JsonObject) j)
                    .map(CheckPvPSearchResult::fromJson)
                    .filter(sr -> sr.clazz() != null)
                    .toList()
                );
            });
    }

    public record CheckPvPSearchResult(String name, String realm, String region, String clazz) implements JsonConvertable {

        public static CheckPvPSearchResult fromJson(io.vertx.core.json.JsonObject json) {
            return new CheckPvPSearchResult(
                json.getString("name"),
                json.getString("realm"),
                json.getString("region"),
                json.getString("class")
            );
        }

        @Override
        public JsonObject toJson() {
            return new JsonObject()
                .put("nick", String.format("%s-%s", name, realm))
                .put("region", region)
                .put("class", clazz);
        }
    }
}
