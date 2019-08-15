<template>
  <div id="wrapper">
    <div id="content" class="row jusb">
      <!-- article -->
      <div class="article">
        <screening></screening>

        <gaia catalog="movie" title="最近热门电影"></gaia>
        <gaia catalog="tv" title="最近热门电视剧"></gaia>

        <reviews></reviews>
      </div>
      <!-- article -->

      <!-- aside -->
      <div class="aside">
        <rating-answer></rating-answer>
        <hot-link></hot-link>
        <billboard></billboard>
        <doulist></doulist>
      </div>
      <!-- aside -->
    </div>
  </div>
</template>

<script>
import screening from "./content/screening";
import gaia from "./content/gaia";
import reviews from "./content/reviews";

import billboard from "./aside/billboard";
import doulist from "./aside/doulist";
import hotLink from "./aside/hot_link";
import ratingAnswer from "./aside/rating_answer";
export default {
  components: {
    screening,
    gaia,
    reviews,
    billboard,
    doulist,
    hotLink,
    ratingAnswer
  }
};
</script>

<style lang="scss" scoped>
</style>