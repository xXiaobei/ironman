//自定义js逻辑

class siderbar {
    //菜单事件绑定
    bind_click() {
        $("#sidebar .nav-link").bind("click", this.menu_click);
    }
    //菜单单击
    menu_click() {
        let cur_parent = "";
        const menus = $("#sidebar .nav-link");
        $.each(menus, (index, value) => {
            const ele_cur = $(menus[index]);
            ele_cur.parent().removeClass("active");
            if (ele_cur.text() == $(this).text()) cur_parent = ele_cur.parent();
        });
        if (cur_parent) cur_parent.addClass("active");

        //测试页面局部刷新
        $.ajax({
            type: "GET",
            dataType: "html",
            url: "domain/",
            success: function(data) {},
            error: function(err) {
                console.log(err);
            }
        });

        return false; //阻止默认事件
    }
}

$(function() {
    const sidebar = new siderbar();
    sidebar.bind_click();
});
