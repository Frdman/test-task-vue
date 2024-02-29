<template>
  <div id="contentPopup" >
    <!-- Кнопка "Начать" -->
    <button @click="showPopup" id="start"><span>Начать</span></button>

    <!-- Попап -->
    <div v-if="isPopupVisible" class="overlay" @click.self="closePopup">
      <div class="popup">
        <h2>Попап формы</h2>
        <div class="fields">
          <div class="input-field1">
            <div>
              <label for="input_1"></label>
              <input pclass="input" placeholder="Фамилия" v-model="inputs[0]"  type="text" />
            </div>
            <div>
              <label for="input_2"></label>
              <input class="input" placeholder="Имя" v-model="inputs[1]" type="text" />
            </div>
            <div>
              <label for="input_3"></label>
              <input class="input" placeholder="Отчество" v-model="inputs[2]" type="text" />
            </div>
          </div>
          <div class="input-field2">
            <div>
              <label for="input_4"></label>
              <input class="input" placeholder="Дата рождения" v-model="inputs[3]" type="text" />
            </div>
            <div>
              <label for="input_5"></label>
              <input class="input" placeholder="Город" v-model="inputs[4]" type="text" />
            </div>
          </div>
        </div>
        <button class="btn" @click="submitForm" id="submitButton">
          <span>Отправить</span>
        </button>
      </div>
    </div>

    <!-- Вывод данных после отправки формы -->
    <div v-if="submittedData">
      <h2>Введенные данные:</h2>
      <ul>
        <ol v-for="(value, key) in submittedData" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </ol>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isPopupVisible: false,
      inputs: ["", "", "", "", ""],
      submittedData: null,
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup(event) {
      if (event.target === event.currentTarget) {
        this.isPopupVisible = false;
      }
    },
    submitForm() {
      this.submittedData = {};
      this.inputs.forEach((value, index) => {
        this.submittedData["Поле " + (index + 1)] = value;
      });

      localStorage.setItem('formData', JSON.stringify(this.submittedData));

      this.isPopupVisible = false;
    },
  },

  checking(){
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        this.submittedData = JSON.parse(savedData);
    }
  }
};
</script>

<style lang="css" scoped>

</style>