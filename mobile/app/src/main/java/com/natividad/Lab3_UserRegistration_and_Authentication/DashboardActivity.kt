package com.natividad.Lab3_UserRegistration_and_Authentication

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class DashboardActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dashboard)

        findViewById<Button>(R.id.logoutButton).setOnClickListener {
            RetrofitClient.instance.logout().enqueue(object : Callback<String> {
                override fun onResponse(call: Call<String>, response: Response<String>) {
                    Toast.makeText(applicationContext, "Logged Out", Toast.LENGTH_SHORT).show()
                    val intent = Intent(this@DashboardActivity, MainActivity::class.java)
                    intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                    startActivity(intent)
                }
                override fun onFailure(call: Call<String>, t: Throwable) {
                    // Even if backend fails, force logout locally
                    startActivity(Intent(this@DashboardActivity, MainActivity::class.java))
                    finish()
                }
            })
        }
    }
}