<template>
  <section
    v-for="card in cards"
    :key="card.id"
    class="grid text-center content-center bg-slate-100 shadow-lg shadow-slate-400 w-[90%] lg:max-w-[25vw] h-quarter bg-cover bg-center bg-no-repeat rounded-3xl"
    :style="{ 'background-image': `url(${card.image.backgroundImage})` }"
  >
    <!-- <CardImage>{{ card.image }}</CardImage> -->
    <div class="grid text-center content-center px-8">
      <CouresesTitleCard>{{ card.title }}</CouresesTitleCard>
      <CouresesDescriptionCard>{{ card.description }}</CouresesDescriptionCard>
      <CoursesButton>
        <button
          class="bg-teal-600 p-3 rounded-md text-white font-semibold hover:bg-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300"
        >
          {{ card.button }}
        </button>
      </CoursesButton>
    </div>
    <slot></slot>
  </section>
</template>

<script setup>
  const cards = [
    {
      title: "HTML",
      description: "Learn the foundational of web development",
      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      },
      button: "View Course",
    },
    {
      title: "CSS",
      description: "Learn how to style content of a webpage",
      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      },
      button: "View Course",
    },
    {
      title: "JavaScript",
      description: "Learn how to implement complex features to a website",
      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      },
      button: "View Course",
    },
    {
      title: "Front End Bundle",
      description: "Learn Front End development with HTML,CSS and Javascript",
      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      },
      button: "View Course",
    },

    {
      title: "Python",
      description: "Learn how develop software and websites",
      image: {
        backgroundImage:
          "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      button: "View Course",
    },
    {
      title: "React",
      description: "Learn the most in demand coding framework",
      image: {
        backgroundImage:
          "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      button: "View Course",
    },
  ];
</script>
