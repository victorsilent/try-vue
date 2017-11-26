<template>
  <Card title="Adicionar Usuário">
    <article v-if="formErrors" class="message is-danger">
      <div class="message-body">
        {{formErrors}}
      </div>
    </article>
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input 
          name="contactName"
          v-validate="'required|min:3'"
          v-model="newUser.name" 
          class="input" type="text" 
          placeholder="Text input">
          <span v-show="errors.has('contactName')">
            {{ errors.first('contactName') }}
          </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Background</label>
      <div class="control">
        <textarea 
          name="background"
          v-validate="'required|min:5'"
          v-model="newUser.background" 
          class="textarea">
        </textarea>
        <span v-show="errors.has('background')">
          {{ errors.first('background') }}
        </span>
      </div>
    </div>
  
    <div class="field">
      <label class="label">Emails</label>
      <div 
        class="control input-list" 
        v-for="(email, index) in newUser.emails">
        <input
          v-validate="'required|email'"
          v-bind:name="`email[${index}]`"
          v-model="email.address"
          class="input" 
          type="text" 
          placeholder="Email">
          <span v-show="errors.has(`email[${index}]`)">
            {{ errors.first(`email[${index}]`) }}
          </span>
      </div>
      <a href="#" @click.prevent="addEmail">Adicionar outro email</a>
    </div>

    <div class="field">
      <div class="field-label has-text-left">
        <label class="label">Telefones</label>
      </div>
      <div 
        class="field-body input-list input-block" 
        v-for="(phone, index) in newUser.phones">
        <div class="field">
          <p class="control">
            <input 
              v-validate="'required|max:2|min:2'"
              v-bind:name="`code[${index}]`"
              v-model="phone.code"
              class="input" 
              type="text" 
              placeholder="Codigo">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <input
              v-validate="'required|max:9|min:8'"
              v-bind:name="`phone[${index}]`"
              v-model="phone.number"
              class="input" 
              type="text" 
              placeholder="Telefone">
          </p>
        </div>
        <span v-show="errors.has(`code[${index}]`)">
          {{ errors.first(`code[${index}]`) }}
        </span>
        <span v-show="errors.has(`phone[${index}]`)">
          {{ errors.first(`phone[${index}]`) }}
        </span>
      </div>
      <a href="#" @click.prevent="addPhone">Adicionar outro telefone</a>
    </div>
    <button 
      :disabled="errors.any()"
      @click.prevent="createUser" 
      class="button is-info is-medium">
      Cadastrar
    </button>
  </Card>
</template>

<script>
import Card from './layout/card/Card';
import { addContact } from '../api/api';

export default {
  name: 'AddUser',
  components: {
    Card,
  },
  data() {
    return {
      formErrors: '',
      code: '',
      newUser: {
        contact_source_id: '1',
        name: '',
        background: '',
        phones: [
          {
            code: '',
            number: '',
          },
        ],
        emails: [
          {
            address: '',
          },
        ],
      },
    };
  },
  methods: {
    createUser() {
      const vm = this;
      addContact(this.newUser)
      .then(() => vm.$router.push('/'))
      .catch((error) => {
        this.formErrors = error.message;
      });
    },
    addEmail() {
      const emails = [...this.newUser.emails, { address: '' }];
      this.newUser.emails = emails;
    },
    addPhone() {
      const phones = [...this.newUser.phones, { code: '', number: '' }];
      this.newUser.phones = phones;
    },
  },
};
</script>

<style scoped>
</style>
