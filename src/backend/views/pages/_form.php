<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use mihaildev\ckeditor\CKEditor;
use yii\bootstrap\Tabs;

/* @var $this yii\web\View */
/* @var $model backend\models\Pages */
/* @var $form yii\widgets\ActiveForm */
if(Yii::$app->user->can('admin')) {
    $this->registerJs("$('.unlockslug').text('edit');", yii\web\View::POS_READY);
} else {
    $this->registerJs("$('.unlockslug').remove();", yii\web\View::POS_READY);
}
?>

<div class="pages-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->errorSummary($model); ?>

    <?php if(Yii::$app->user->can('admin')):?>
        <?= $form->field($model, 'menu')->checkbox()?>
    <?php endif;?>

    <?= $form->field($model, 'slug')->widget(\heggi\slugwidget\SlugWidget::className(), ['title' => 'title_en']) ?>

    <?= Tabs::widget([
        'options' => [
            'class' => 'nav-tabs',
            'style' => 'margin-bottom: 15px',
        ],
        'items' => [
            [
                'label' => Yii::t('app/language', 'en'),
                'content' => $this->render('_form_language_tab', ['form' => $form, 'model' => $model, 'language' => 'en'])
            ],
            [
                'label' => Yii::t('app/language', 'ro'),
                'content' => $this->render('_form_language_tab', ['form' => $form, 'model' => $model, 'language' => 'ro'])
            ],
            [
                'label' => Yii::t('app/language', 'ru'),
                'content' => $this->render('_form_language_tab', ['form' => $form, 'model' => $model, 'language' => 'ru'])
            ]
        ],
    ]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
