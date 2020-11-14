<template>
  <div class="form-container">
    <h1 class="sign-up-title">Регистрация</h1>
    <form v-if="!registrationPassed" @submit.prevent="checkForm">
      <h2 class="sign-up-subtitle">Личные данные</h2>
      <div class="group">
        <input type="text" 
          class="text-input"  
          placeholder="1"
          v-model.trim="form.surname"
          :class="{invalid: ($v.form.surname.$dirty && !$v.form.surname.required) || ($v.form.surname.$dirty && !$v.form.surname.minLength)}"
          >
        <span class="bar"></span>
        <label class="label-name">Фамилия*</label>
        <p v-if="$v.form.surname.$dirty && !$v.form.surname.required" class="error">Поле должно быть заполнено</p>
        <p v-else-if="$v.form.surname.$dirty && !$v.form.surname.minLength" class="error">Введите не меньше 2-х символов</p>
      </div>
      
      <div class="group">
        <input type="text" 
          placeholder="1"
          class="text-input" 
          v-model.trim="form.name"
          :class="{invalid: ($v.form.name.$dirty && !$v.form.name.required) || ($v.form.name.$dirty && !$v.form.name.minLength)}"
          >
        <span class="bar"></span>
        <label class="label-name">Имя*</label>
        <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="error">Поле должно быть заполнено</p>
        <p v-else-if="$v.form.name.$dirty && !$v.form.name.minLength" class="error">Введите не меньше 2-х символов</p>
      </div>

      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model.trim="patronymic">
        <span class="bar"></span>
        <label class="label-name">Отчество</label>
      </div>

      <div class="group">
        <input
        placeholder="1"
          name="date" 
          type='text' 
          class="text-input" 
          onfocus="(this.type='date')" 
          onblur="if(!this.value)this.type='text'"
          :class="{invalid: ($v.form.birthDate.$dirty && !$v.form.birthDate.required)}"
          v-model="form.birthDate">
        <span class="bar"></span>
        <label class="label-name">Дата рождения*</label>
        <p v-if="$v.form.birthDate.$dirty && !$v.form.birthDate.required" class="error">Поле должно быть заполнено</p>
      </div>
      
      <div class="group">
        <input type="text" class="text-input num" 
          placeholder="1"
          v-phone
          :class="{invalid: ($v.form.telNumber.$dirty && !$v.form.telNumber.required)}"
          v-model="form.telNumber">
        <label class="label-name">Номер телефона*</label>
        <span class="bar"></span>
        <p v-if="$v.form.telNumber.$dirty && !$v.form.telNumber.required" class="error">Поле должно быть заполнено</p>
        <p v-else-if="$v.form.telNumber.$dirty && !$v.form.telNumber.minLength" class="error">Номер должен содержать 11 символов</p>
      </div>
      <div class="form-check-group">
        <h3 class="form-title">Пол</h3>
        <div class="form--flex">
          <div class="form-check">
            <label class="form-check-label" for='male'>мужской</label>
            <input type="radio" 
                    value='male' 
                    name='gendere' 
                    id="male" 
                    v-model="gendere">
          </div>
          <div class="form-check">
            <label class="form-check-label" for='female'>женский</label>
            <input type="radio" 
                    value='female' 
                    name='gendere' 
                    id='female'
                    v-model="gendere">
          </div>
        </div>
      </div>

      <div class="form-select-group">
        <h3 class="form-title">Группа клиентов*</h3>
        <select id="clientGroup" 
            class="multi-select" 
            multiple 
            :class="{invalid: ($v.form.selectedClientGroup.$dirty && !$v.form.selectedClientGroup.required)}"
            v-model="form.selectedClientGroup">
          <option
            v-for="(type, index) in clientGroup"
            :value="type.value"
            :key='index'>
            {{ type.label}}
          </option>
          
        </select>
        <p v-if="$v.form.selectedClientGroup.$dirty && !$v.form.selectedClientGroup.required" class="error">Поле должно быть заполнено</p>
      </div>

      <div class="form-select-group">
        <h3 class="form-title">Лечащий врач</h3>
        <select id="clientGroup" class="select" v-model="selectedDoctor">
          <option
            v-for="(doctor, index) in doctors"
            :value="doctor.value"
            :key='index'>
            {{ doctor.label}}
          </option>
        </select>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="noNotifications"  v-model='noNotifications' class="checkbox">
        <label for='noNotifications' class="form-title">Не отправлять СМС</label>
        
      </div>
      <h2 class="sign-up-subtitle">Адрес</h2>
      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model.trim="postcode">
        <span class="bar"></span>
        <label class="label-name">Индекс</label>
      </div>
      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model.trim="country">
        <span class="bar"></span>
        <label class="label-name">Страна</label>
      </div>
      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model.trim="region">
        <span class="bar"></span>
        <label class="label-name">Область</label>
      </div>
      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          :class="{invalid: ($v.form.city.$dirty && !$v.form.city.required)}"
          v-model.trim="form.city">
        <span class="bar"></span>
        <label class="label-name">Город*</label>
        <p v-if="$v.form.city.$dirty && !$v.form.city.required" class="error">Поле должно быть заполнено</p>
      </div>
      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model.trim="street">
        <span class="bar"></span>
        <label class="label-name">Улица</label>
      </div>
      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model.trim="houseNumber">
        <span class="bar"></span>
        <label class="label-name">Дом</label>
      </div>

      <h2 class="sign-up-subtitle">Данные документа</h2>
      <div class="form-select-group">
        <h3 class="form-title">Тип документа*</h3>
        <select id="documentType" 
          class="select" 
          :class="{invalid: ($v.form.documentType.$dirty && !$v.form.documentType.required)}"
          v-model="form.documentType">
          <option
            v-for="(type, index) in typesOfDocuments"
            :value="type.value"
            :key='index'>
            {{ type.label}}
          </option>
        </select>
        <p v-if="$v.form.documentType.$dirty && !$v.form.documentType.required" class="error">Поле должно быть заполнено</p>
      </div>

      <div class="group">
        <input type="text" 
          class="text-input"
          placeholder="1"           
          v-model.trim="documentSerial">
        <span class="bar"></span>
        <label class="label-name">Серия</label>
      </div>

      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model.trim="documentNumber">
        <span class="bar"></span>
        <label class="label-name">Номер</label>
      </div>

      <div class="group">
        <input type="text" 
          class="text-input" 
          placeholder="1"
          v-model="documentIssuedBy">
        <span class="bar"></span>
        <label class="label-name">Кем выдан</label>
      </div>

      <div class="group">
        <input
          placeholder="1"
          name="date" 
          type='text' 
          class="text-input" 
          onfocus="(this.type='date')" 
          onblur="if(!this.value)this.type='text'"
          :class="{invalid: ($v.form.documentDateIssuedby.$dirty && !$v.form.documentDateIssuedby.required)}"
          v-model.trim="form.documentDateIssuedby">
        <span class="bar"></span>
        <label class="label-name">Дата выдачи*</label>
        <p v-if="$v.form.documentDateIssuedby.$dirty && !$v.form.documentDateIssuedby.required" class="error">Поле должно быть заполнено</p>
      </div>
      
      <h2 class="sign-up-subtitle">*Поле обязательное для заполнения.</h2>
      <button type="submit" class="form-button">Регистрация</button>
    </form>
    <div v-else>
      <h1>
        {{ `${ form.name }, поздравляем вы успешно зарегистрированы!` }}
      </h1>
    </div>

  </div>  
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength} from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  name: 'newForm',
  data() {
    return{
      registrationPassed: false,
      form:{
        surname: '',
        name: '',
        city:'',
        birthDate: '',
        telNumber:'7'+'',
        selectedClientGroup: [],
        documentDateIssuedby:'',
      },
      patronymic: '',
      gendere:'male',
      selectedDoctor: 'Ivanov',
      noNotifications: false,
      postcode:'',
      country:'',
      region:'',
      street:'',
      houseNumber:'',
      documentType:'',
      documentSerial:'',
      documentIssuedBy:'',
      documentNumber:'',
      clientGroup:[
        {
          label: 'VIP',
          value: 'VIP'
        },
        {
          label: 'Проблемные',
          value: 'problematic'
        },
        {
          label: 'ОМС',
          value: 'healthInsurance'
        }
      ],
      doctors:[
        {
          label: 'Иванов',
          value: 'Ivanov'
        },
        {
          label: 'Захаров',
          value: 'Zakharov'
        },
        {
          label: 'Чернышева',
          value: 'Cheryheva'
        },
      ],
      typesOfDocuments:[
         {
          label: 'Паспорт',
          value: 'Passport'
        },
         {
          label: 'Свидетельство о рождении',
          value: 'birthСertificate'
        },
         {
          label: 'Вод. удостоверение',
          value: 'driversLicence'
        },
      ]
    }
  },
  validations: {
    form: {
      surname:{required, minLength: minLength(2)},
      name:{required, minLength: minLength(2)},
      birthDate:{required},
      city:{required},
      selectedClientGroup:{required},
      documentType:{required},
      documentDateIssuedby:{required},
      telNumber:{required, minLength:minLength(11)}
    }
  },
  methods: {
    checkForm(){
      this.$v.form.$touch()
       if (!this.$v.form.$error) {
        this.registrationPassed = true
      }
    },
  },
  directives:{
    phone:{
      bind(el) {  
        el.oninput = function(e) {
        if (!e.isTrusted) {
          return;
        }
        const x =this.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,3})(\d{0,4})/);
        this.value = (!x[2] ? x[1] : ' ' + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : ''));
        el.dispatchEvent(new Event('input'));
        }
      } 
    }
  }
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap')
*
  box-sizing: border-box
  font-family: 'Roboto', sans-serif
.sign-up
  &-title
    margin-bottom: 15px
    font-size: 35px
    font-weight: 400
  &-subtitle
    margin-bottom: 20px
    font-size: 15px
    font-weight: 400
    color: #000
    text-decoration: underline
.form
  &-check-group
    display: flex
    margin-bottom: 30px
  &-check
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #ccc
    margin-bottom: 10px
    &-label
      color: #000
      font-size: 18px
      font-weight: normal
      margin-right: 5px
  &-title
    display: block
    padding-left: 10px
    color: #999
    font-size: 18px
    font-weight: normal
    margin-right: 20px
  &--flex
    display: flex
    flex-direction: column
    max-width: 210px
    justify-content: space-between
    position: relative
  &-select-group
    margin-bottom: 30px
  &-button
    margin-bottom: 50px
    padding: 15px 30px
    background-color: #6EC1E4
    color: #fff
    border-radius: 8px
    outline: none
    border: none
    font-size:  16px
    cursor: pointer
select
  padding: 10px
  margin-top: 10px
  outline: none
  width: 300px
  color: #000
  font-size: 18px
  font-weight: normal
  margin-right: 5px
  border: 1px solid #ccc
  overflow: hidden
  max-height: max-content
.multi-select
  height: 87px
.checkbox-group
  display: flex
  align-items: center
  margin-bottom: 30px
.checkbox
  width: 15px
  height: 15px
.error
  position: absolute
  font-size: 10px
  color: red
.group
  position: relative
  margin-bottom: 30px
.text-input
  font-size: 16px
  padding: 10px
  display: block
  width: 300px
  border: none
  border-bottom: 1px solid #ccc
  &:focus
    outline: none
.label-name
  color: #999
  font-size: 18px
  position: absolute
  pointer-events: none
  left: 10px
  top: 15px
  transition: 0.2s ease all
  -moz-transition: 0.2s ease all
  -webkit-transition: 0.2s ease all
.text-input
  &:focus ~ label,
  &:not(:placeholder-shown) ~ label,
    top: -15px
    font-size: 14px
    color: #000
.bar
  position: relative
  display: block
  width: 320px
  &:before, 
  &:after
    content: ''
    height: 2px
    width: 0
    bottom: 0
    position: absolute
    background: #000
    transition: 0.2s ease all
    -moz-transition: 0.2s ease all
    -webkit-transition: 0.2s ease all
  &:before
    left: 50%
  &:after
    right: 50%

input:focus 
  ~ .bar:before,
  ~ .bar:after
    width: 50%
input::placeholder
  font-size: 0
.num
  &:focus ~ .prefix,
  &:not(:placeholder-shown) ~ .prefix
    visibility: visible
@media (max-width: 768px)
  button
    cursor: default
@media (max-width: 400px)
  .logo
    margin-left: 0px
    width: 170px
  .form
    &-container
      border-left: none
      padding-left: 0px
  .text
    &-input
      width: 250px
  select
    width: 250px
  .bar
    &::before
      left: 0
    &::after
      right: 20%
  input:focus 
  ~ .bar:before,
  ~ .bar:after
    width: 50%
      
</style>