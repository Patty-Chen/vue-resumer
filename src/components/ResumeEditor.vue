<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.displayItems"
            :class="{active: item === selected}"
            @click="selected = item"
        >
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-${icon_tags[index]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.displayItems" v-show="item === selected">
        {{resume[item]}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    data () {
      return {
        selected: 'personal_info',
        icon_tags: ['Id', 'work', 'study', 'project', 'reward', 'Id', 'Id', 'Id'],
        resume: {
          displayItems: ['personal_info', 'work_history', 'education', 'projects', 'awards', 'contacts', 'others'],
          personal_info: {
            name: '',
            city: '',
            title: ''
          },
          work_history: ['test'],
          education: [],
          projects: [],
          awards: [],
          contacts: [],
          others: []
        }
      }
    }
  }
</script>

<style lang="scss">
  #resumeEditor{
    display: flex;
    > nav{
      width: 80px;
      > ol {
        > li{

          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            width: 2em;
            height: 2em;
            vertical-align: -0.15em;
            fill: white;
            overflow: hidden;
          }
          &.active{
            background: white;
            .icon{
              fill:black;
            }
          }
        }
      }
    }
  }
</style>
