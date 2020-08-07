<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'xiao',
            'surname' => 'li',
            'cpf' => '231.002.999-00',
            'sex' => '2',
            'date_of_birth' => '1992-02-16',
            'telephone' => '(11) 9123-4567',
            'whatsapp' => '+886905551457',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
        ]);
    }
}