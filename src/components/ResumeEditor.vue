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
      <li v-for="(item,index) in resume.displayItems" v-show="item === selected">
        <div v-if="resume[item] instanceof(Array)">
          <div class="subitem" v-for="(subitem,subIndex) in resume[item]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input type="text" :value="value" @input="changeResumeArray(item, subIndex, key, $event.target.value)">
            </div>
            <hr>
          </div>
          <el-button type="primary" v-on:click="addItem(item)">添加</el-button>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item]">
          <label> {{key}} </label>
          <input type="text" :value="resume[item][key]" @input="changeResumeItem(item, key, $event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    data: function () {
      return {
        icon_tags: ['Id', 'work', 'study', 'project', 'reward', 'phone']
      }
    },
    computed: {
      selected: {
        get () {
          return this.$store.state.selected
        },
        set (value) {
          return this.$store.commit('switchTab', value)
        }
      },
      resume () {
        return this.$store.state.resume
      }
    },
    methods: {
      changeResumeArray (field, index, subfield, value) {
        this.$store.commit('updateResumeArray', {
          field,
          index,
          subfield,
          value
        })
      },
      changeResumeItem (field, subfield, value) {
        this.$store.commit('updateResumeItem', {
          field,
          subfield,
          value
        })
      },
      addItem (field) {
        console.log('click')
        this.$store.commit('addItem', {
          field
        })
      }
    }
  }
</script>

<style lang="scss">
  #resumeEditor{
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    > nav{
      width: 80px;
      background: black;
      > ol {
        > li{
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
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
    > .panels{
      flex-grow: 1;
      > li {
        padding: 24px;
      }
    }
    ol{
      list-style: none;
    }
    .resumeField{
      > label{
        display: block;
      }
      input[type=text]{
        margin: 16px 0;
        border: 1px solid #ddd;
        box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
        width: 100%;
        height: 40px;
        padding: 0 16px;
      }
    }
    hr{
      border: none;
      border-top: 1px solid #ddd;
      margin: 24px 0;
    }
  }
</style>
