<template>
  <div id="resumePreview">

    <section data-name="personal_info" v-show="resume.personal_info">
      <h1>
        {{resume.personal_info.name}}
      </h1>
      <h2>{{resume.personal_info.title}}</h2>
      <p>
        <small>{{resume.personal_info.city}}</small>
        <small>{{resume.personal_info.birthday}}</small>
      </p>
    </section>

    <section data-name="work_history" v-show="resume.work_history">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.work_history">
          <h3>{{item.company}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show="item.content"> - {{item.content}} </span>
          </h3>
        </li>
      </ol>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ResumePreview',
  computed: {
    resume () {
      return this.$store.state.resume
    }
  }
}

</script>

<style>
  #resumePreview {
    color: blue;
  }
</style>
