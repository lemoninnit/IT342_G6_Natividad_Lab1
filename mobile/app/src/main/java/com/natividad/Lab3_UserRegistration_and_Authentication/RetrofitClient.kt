package com.natividad.Lab3_UserRegistration_and_Authentication

import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.POST

interface ApiService {
    @POST("/api/auth/register")
    fun register(@Body user: User): Call<String>

    @POST("/api/auth/login")
    fun login(@Body user: User): Call<String>

    @POST("/api/auth/logout")
    fun logout(): Call<String>
}

object RetrofitClient {
    // 10.0.2.2 is the special IP for "localhost" inside the Android Emulator
    private const val BASE_URL = "http://10.0.2.2:8080/"

    val instance: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }
}