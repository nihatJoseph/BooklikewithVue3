<template>
    <AppHeader></AppHeader>
    <div class="flex flex-row">,

        {{$log($route)}}
        <AccountSidebar></AccountSidebar>
        <component :is="$route.meta.componentName" :items="bookmarkList"></component>
        <BookmarkList v-if="bookmarkList.length >0" :items="bookmarkList"/>
        <div v-else>Bookmark bulunmamaktadır.</div>
    </div>

</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";


export default {
    components: {
        AccountSidebar,
    },
    data() {
        return {
            bookmarkList: []
        }
    },
    created() {
        this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((bookmark_list_response) => {
            this.bookmarkList = bookmark_list_response?.data || []

        })
    }
}
</script>