<template>
  <AppHeader />
  <div class="flex flex-row">
    <SidebarLayout @category-changed="updateBookmarkList"></SidebarLayout>
    <BookmarkList v-if="bookmarkList.length >0" :items="bookmarkList"/>
      <div v-else>Bookmark bulunmamaktadır.</div>
  </div>
</template>

<script>
import SidebarLayout from "@/components/HomePage/SidebarLayout.vue";

export default {
  components: {
    SidebarLayout,
  },
  data() {
    return {
      bookmarkList:[]
    }
  },
  mounted() {
    this.$socket.on("NEW_BOOKMARK_ADDED", (bookmark) => {
      this.bookmarkList.push(bookmark)
    })
  },
  created() {
    this.fetchData()


  },
  methods: {
    fetchData() {
      this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((bookmark_list_response) => {
      this.bookmarkList = bookmark_list_response?.data || []
      
    }).catch((err) => {
      console.log(err)
    });
    },
    updateBookmarkList(categoryId) {
      
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`
      this.$appAxios.get(url).then(bookmark_list_response=> {
        this.bookmarkList = bookmark_list_response?.data || []
        
      })
    }
  }
};
</script>
