<template>
  <AppHeader />
  <div class="flex flex-row">
    <SidebarLayout></SidebarLayout>
    <BookmarkList />
  </div>
</template>

<script>
import SidebarLayout from "@/components/HomePage/SidebarLayout.vue";

export default {
  components: {
    SidebarLayout,
  },
};
</script>
