<template>
  <div>
    <b-navbar type="light" variant="light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">Jwt-Auth</nuxt-link>
        <b-navbar-nav>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/dashboard">Dashboard</nuxt-link>
            </li>    
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
            </li>    
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
            </li>    
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>
