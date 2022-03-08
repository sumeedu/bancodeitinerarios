<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Áreas do conhecimento
        Category::create([
            'name' => 'Linguagem e suas Tecnologias',
            'slug' => Str::slug('Linguagem e suas Tecnologias'),
            'type' => 'area'
        ]);
        Category::create([
            'name' => 'Matemática e suas Tecnologias',
            'slug' => Str::slug('Matemática e suas Tecnologias'),
            'type' => 'area'
        ]);
        Category::create([
            'name' => 'Ciências da Natureza e suas Tecnologias',
            'slug' => Str::slug('Ciências da Natureza e suas Tecnologias'),
            'type' => 'area'
        ]);
        Category::create([
            'name' => 'Ciências Humanas e Sociais Aplicadas',
            'slug' => Str::slug('Ciências Humanas e Sociais Aplicadas'),
            'type' => 'area'
        ]);

        // Eixos Estruturantes
        Category::create([
            'name' => 'Investigação científica',
            'slug' => Str::slug('Investigação científica'),
            'type' => 'axis'
        ]);
        Category::create([
            'name' => 'Processos criativos',
            'slug' => Str::slug('Processos criativos'),
            'type' => 'axis'
        ]);
        Category::create([
            'name' => 'Mediação e intervenção sociocultural',
            'slug' => Str::slug('Mediação e intervenção sociocultural'),
            'type' => 'axis'
        ]);
        Category::create([
            'name' => 'Empreendedorismo',
            'slug' => Str::slug('Empreendedorismo'),
            'type' => 'axis'
        ]);

        // Objetivos da ONU
        Category::create([
            'name' => 'Erradicação da Pobreza',
            'slug' => Str::slug('Erradicação da Pobreza'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Erradicação da Fome',
            'slug' => Str::slug('Erradicação da Fome'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Saúde de Qualidade',
            'slug' => Str::slug('Saúde de Qualidade'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Educação de Qualidade',
            'slug' => Str::slug('Educação de Qualidade'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Igualidade de Gênero',
            'slug' => Str::slug('Igualidade de Gênero'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Água Limpa e Saneamento',
            'slug' => Str::slug('Água Limpa e Saneamento'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Energias Renováveis',
            'slug' => Str::slug('Energias Renováveis'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Empregos Dignos e Crescimento Econômico',
            'slug' => Str::slug('Empregos Dignos e Crescimento Econômico'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Inovação e Infraestrutura',
            'slug' => Str::slug('Inovação e Infraestrutura'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Redução das Desigualdades',
            'slug' => Str::slug('Redução das Desigualdades'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Cidades e Comunidades Sustentáveis',
            'slug' => Str::slug('Cidades e Comunidades Sustentáveis'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Consumo Responsável',
            'slug' => Str::slug('Consumo Responsável'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Combate às Mudanças Climáticas',
            'slug' => Str::slug('Combate às Mudanças Climáticas'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Vidade Debaixo da Água',
            'slug' => Str::slug('Vidade Debaixo da Água'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Vida Sobre a Terra',
            'slug' => Str::slug('Vida Sobre a Terra'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Paz e Justiça',
            'slug' => Str::slug('Paz e Justiça'),
            'type' => 'objective'
        ]);
        Category::create([
            'name' => 'Parcerias Pelas Metas',
            'slug' => Str::slug('Parcerias Pelas Metas'),
            'type' => 'objective'
        ]);
    }
}
