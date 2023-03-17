package io.github.sammers.pla;

import io.vertx.reactivex.core.Vertx;
import io.vertx.reactivex.ext.mongo.MongoClient;
import io.vertx.reactivex.ext.web.Router;
import io.vertx.reactivex.ext.web.RoutingContext;

import java.util.Optional;

public class Http {

    private final Vertx vertx;
    private final Ladder ladder;

    public Http(Vertx vertx, Ladder ladder) {
        this.vertx = vertx;
        this.ladder = ladder;
    }

    public void start() {
        Vertx vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        router.get("/ladder/2v2").handler(ctx -> ladder(ctx, ladder.refByBracket(Ladder.TWO_V_TWO).get()));
        router.get("/ladder/3v3").handler(ctx -> ladder(ctx, ladder.refByBracket(Ladder.THREE_V_THREE).get()));
        router.get("/ladder/shuffle").handler(ctx -> ladder(ctx, ladder.refByBracket(Ladder.SHUFFLE).get()));
        router.get("/ladder/rbg").handler(ctx -> ladder(ctx, ladder.refByBracket(Ladder.RBG).get()));
        router.get("/activity/2v2").handler(ctx -> ladder(ctx, ladder.diffsByBracket(Ladder.TWO_V_TWO).get()));
        router.get("/activity/3v3").handler(ctx -> ladder(ctx, ladder.diffsByBracket(Ladder.THREE_V_THREE).get()));
        router.get("/activity/shuffle").handler(ctx -> ladder(ctx, ladder.diffsByBracket(Ladder.SHUFFLE).get()));
        router.get("/activity/rbg").handler(ctx -> ladder(ctx, ladder.diffsByBracket(Ladder.RBG).get()));
        vertx.createHttpServer().requestHandler(router).listen(9000);
    }

    private void ladder(RoutingContext ctx, JsonPaged snapshot) {
        Long page = Optional.of(ctx.queryParam("page"))
            .flatMap(l -> l.stream().findFirst())
            .map(Long::parseLong).orElse(1L);
        if (snapshot == null) {
            ctx.response().end("No data");
        } else {
            ctx.response().end(snapshot.toJson(page).encode());
        }
    }
}
