$(document).ready(function() {
    $(window).scroll(function() {
        var scrollt = document.documentElement.scrollTop +
                      document.body.scrollTop;
        if (scrollt > 200) {
            $("#gotop").fadeIn(400);
            if ($(window).width() >= 1200) {
                $(".navbar").stop().fadeTo(400, 0.2);
            }
        }
        else {
            $("#gotop").fadeOut(400);
            if($(window).width() >= 1200) {
                $(".navbar").stop().fadeTo(400, 1);
            }
        }
    });

    $("#gotop").click(function() {
        $("html, body").animate({
            scrollTop: "0px"
        }, 200);
    });

    $(".navbar").mouseenter(function() {
        $(".navbar").fadeTo(100, 1);
    });

    $(".navbar").mouseleave(function() {
        var scrollt = document.documentElement.scrollTop +
                      document.body.scrollTop;
        if (scrollt > 200) {
            $(".navbar").fadeTo(100, 0.2);
        }
    });

    replaceMeta();

    $(window).resize(function() {
        replaceMeta();
    });
});

replaceMeta = function() {
    if ($(window).width() < 980) {
        if ($("#side_meta #post_meta").length > 0) {
            $("#post_meta").appendTo("#top_meta");
        }
        if ($("#sidebar #site_search").length > 0) {
            $("#site_search").appendTo("#top_search");
            $("#site_search #st-search-input").css("width", "95%");
        }
    }
    else {
        if ($("#top_meta #post_meta").length > 0) {
            $("#post_meta").appendTo("#side_meta");
        }
        if ($("#top_search #site_search").length > 0) {
            $("#site_search").prependTo("#sidebar");
            $("#site_search #st-search-input").css("width", "85%");
        }
    }
}

// add copy button to code block
// document.addEventListener("DOMContentLoaded", () => {
//     // 查找所有的代码块
//     const codeBlocks = document.querySelectorAll("pre");
  
//     codeBlocks.forEach((block) => {
//       // 创建一个按钮
//       const button = document.createElement("button");
//       button.className = "copy-btn";
//       button.textContent = "Copy";
  
//       // 添加点击事件
//       button.addEventListener("click", () => {
//         const code = block.innerText || block.textContent; // 获取代码内容
//         navigator.clipboard.writeText(code).then(() => {
//           button.textContent = "Copied!";
//           setTimeout(() => {
//             button.textContent = "Copy";
//           }, 2000);
//         }).catch(err => {
//           console.error("Failed to copy code: ", err);
//           button.textContent = "Failed!";
//           setTimeout(() => {
//             button.textContent = "Copy";
//           }, 2000);
//         });
//       });
  
//       // 将按钮插入到代码块外层
//       block.style.position = "relative"; // 确保样式正确
//       block.parentNode.style.position = "relative"; // 父容器相对定位
//       block.parentNode.insertBefore(button, block);
//     });
//   });