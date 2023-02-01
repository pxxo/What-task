// クッキーの保存
jQuery(function ($) {
    if ($.cookie("chk_sample_selected_value")) {

        var load_values = $.cookie("chk_sample_selected_value").split(",");

        for (var i = 0; i < load_values.length; ++i) {
            load_values[i] = decodeURIComponent(load_values[i]);
        }

        $("input[type=checkbox][name=chk_sample]").each(function () {
            this.checked = $.inArray(this.value, load_values) != -1;
        });
    }

    $("input[type=checkbox][name=chk_sample]").change(function () {

        var save_values = [];

        $("input[type=checkbox][name=chk_sample]").each(function () {
            this.checked && save_values.push(encodeURIComponent(this.value));
        });

        $.cookie("chk_sample_selected_value", save_values.join(","));
    });
});

// スムーズなスクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        var speed = 500;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});