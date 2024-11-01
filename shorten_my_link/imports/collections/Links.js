import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import validUrl from "valid-url";
import { check, Match } from "meteor/check";

Meteor.methods({
  "link.insert": async (url) => {
    try {
      // Valida se é uma URL
      check(
        url,
        Match.Where((url) => validUrl.isUri(url) != undefined)
      ); // Gera um erro ao console caso não seja

      // Gera um token para identificar a URL
      const token = Math.random().toString(36).slice(-5);

      // insere objeto na Links collection
      await Links.insertAsync({ url, token, clicks: 0, insert_date: Date.now() });

      return { error: "" };
    } catch (error) {
      // caso o Meteor Method retorne um erro é atualizado o stade Error com a mensagem de erro, e consequentemento re-renderizando a pagina
      return { error: "Invalid URL! Try again." };
    }
  },
});

export const Links = new Mongo.Collection("links");
